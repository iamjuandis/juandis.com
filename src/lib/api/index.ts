const API_URL: any = process.env.WORDPRESS_GRAPHQL_API_URL;

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
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
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

/* export async function getPreviewPost(id: any, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
      query PreviewPost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          databaseId
          slug
          status
        }
      }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
} */

// Get one project by Slug
export async function getProjectBySlug(id: any, idType = 'SLUG') {
  const data = await fetchAPI(
    `
  query getProjectBySlug($id: ID!, $idType: PostIdType!) {
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
  const data = await fetchAPI(`
    query getAllProjectsSlug {
      posts(where: {categoryName: "Project"}) {
        nodes {
          slug
        }
      }
    }
    `);
  return data?.posts;
}

export async function getAllProjects(preview: any) {
  const data = await fetchAPI(
    `
    query getAllProjects {
      posts(where: {categoryName: "Project"}) {
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

/* export async function getPostAndMorePosts(slug: any, preview: any, previewData: any) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === 'draft';
  const isRevision = isSamePost && postPreview?.status === 'publish';
  const data = await fetchAPI(
    `
      fragment AuthorFields on User {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            ...AuthorFields
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
          ${
            // Only some of the fields of a revision are considered as there are some inconsistencies
            isRevision
              ? `
          revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
            edges {
              node {
                title
                excerpt
                content
                author {
                  node {
                    ...AuthorFields
                  }
                }
              }
            }
          }
          `
              : ''
          }
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              ...PostFields
            }
          }
        }
      }
    `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }: any) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
 */
