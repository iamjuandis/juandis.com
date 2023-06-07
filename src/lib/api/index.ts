const API_URL: any = process.env.WORDPRESS_GRAPHQL_API_URL;

async function fetchAPI(query: any, { variables }: Record<string, any> = {}) {
  console.log('ENTERS FETCH API');
  const headers = { 'Content-Type': 'application/json' };

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
export async function getProjectBySlug(id: any, idType = 'SLUG') {
  console.log('ENTERS getProjectBySlug');
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
      content
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
          uri
        }
      }
      slug
      title
      uri
    }
  }
  `,
    {
      variables: { id, idType },
    }
  );
  return data?.post;
}

export async function getAllProjectsSlug() {
  console.log('ENTERS getAllProjectsSlug');
  const data = await fetchAPI(`
    query getAllProjectsSlug {
      posts(where: {categoryName: "work"}) {
        nodes {
          slug
        }
      }
    }
    `);
  return data?.posts;
}

export async function getAllProjects(preview: any) {
  console.log('ENTERS getAllProjects');
  const data = await fetchAPI(
    `query getAllProjects {
      posts(where: {categoryName: "work"}) {
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
      },
    }
  );

  return data?.posts;
}
