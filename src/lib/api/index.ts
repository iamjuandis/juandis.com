const API_URL: any = process.env.WORDPRESS_GRAPHQL_API_URL;
const WORDPRESS_API_URL: any = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: any, { variables }: Record<string, any> = {}) {
  const headers = {
    'Content-Type': 'application/json',
  };

  // WPGraphQL Plugin must be enabled
  const data = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .then((json) => json.data)
    .catch((error) => {
      console.error('FETCH ERRORS:', error);
      throw new Error('Failed to fetch API');
    });

  return data;
}

// Get one project preview by Slug
export async function getPreviewProjectBySlug(id: any, idType = 'SLUG') {
  const data = await fetchAPI(
    `query getProjectBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      acfProjects {
        company
        companyimage
        location
        protected
        role
        year
      }
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      slug
      title
      databaseId
    }
  }
  `,
    {
      variables: { id, idType },
    }
  );
  return data?.post;
}

//NEW TO TEST !TODO
export async function getProjectContentBySlug(id: any, idType = 'SLUG') {
  console.log('ID-', id);

  const content = await fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    //redirect: 'follow',
    body: JSON.stringify({
      query: `query getProjectContentBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          content
        }
      }
      `,
      variables: {
        id,
        idType,
      },
    }),
  })
    .then((res) => res.text())
    .then((data) => data);

  return content;
}

// Get one project content by ID
export async function getFullProjectById(id: any) {
  const post = await fetch(`${WORDPRESS_API_URL}/posts/${id}`, {
    method: 'GET',
    redirect: 'follow',
  })
    .then((res) => res.json())
    .then((data) => data?.content?.rendered)
    .catch((error) => {
      console.log('ERROR - getFullProjectById: ', error);
      throw new Error(`WordPress API Fetch error - ${error}`);
    }); //gets content node

  return post;
}

export async function getAllProjectsSlug(categoryName = 'work') {
  const data = await fetchAPI(
    `
  query getAllProjectsSlug($categoryName: String) {
    posts(where: {categoryName: $categoryName}) {
      nodes {
        slug
      }
    }
  }
    `,
    {
      variables: { categoryName },
    }
  );
  return data?.posts;
}

export async function getAllProjects(preview: any, categoryName = 'work') {
  const data = await fetchAPI(
    `query getAllProjects($categoryName: String) {
      posts(where: {categoryName: $categoryName, orderby: {field: DATE, order: ASC}}) {
        nodes {
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          slug
          acfProjects {
            company
            companyimage
            protected
            role
            year
          }
          excerpt
          title
        }
      }
    }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        categoryName,
      },
    }
  );

  return data?.posts;
}
