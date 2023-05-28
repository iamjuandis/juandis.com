export async function postsToProjects(posts: any) {
  const FormatedProjects = new Array();
  console.log('RUNNING', posts);

  for (const entry of posts) {
    const imageID = entry.featured_media;
    const featuredImage = await getMedia(imageID);
    console.log('featured', featuredImage);
    FormatedProjects.push({
      title: entry.title.rendered,
      featuredImage: featuredImage ?? null,
      slug: `/work/${entry.slug}`,
      date: entry.date,
    });
  }
  return FormatedProjects;
}

export async function getMedia(id: any) {
  const mediaData = await fetch(`${process.env.WORDPRESS_API_URL}/media/${id}`);
  //console.log('mediaData', mediaData);
  const mediaObject = await mediaData.json();
  const imageURL = mediaObject.source_url;
  console.log('imageURL', imageURL);
  return imageURL;
}
