const API_URL: any = process.env.WORDPRESS_GRAPHQL_API_URL;
const WORDPRESS_API_URL: any = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: any, { variables }: Record<string, any> = {}) {
  const headers = {
    'Content-Type': 'application/json',
  };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json?.errors) {
    console.error(json?.errors);
    throw new Error('Failed to fetch API');
  }
  return json?.data;
}

// Get one project by Slug
export async function getPreviewProjectBySlug(id: any, idType = 'SLUG') {
  const data = await fetchAPI(
    `query getProjectBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      acfProjects {
        company
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

export async function getFullProjectById(id: any) {
  const post = await fetch(`${WORDPRESS_API_URL}/posts/${id}`, {
    method: 'GET',
    redirect: 'follow',
  })
    .then((res) => res.json())
    .then((data) => data?.content?.rendered); //gets content node

  return post;
}

// Get one project by Slug
export async function getProjectContentBySlug(id: any, idType = 'SLUG') {
  const data = await fetchAPI(
    `query getProjectContentBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      content
      slug
    }
  }
  `,
    {
      variables: { id, idType },
    }
  );
  return data?.post;
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
      posts(where: {categoryName: $categoryName}) {
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
