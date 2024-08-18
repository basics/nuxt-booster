import { defineEventHandler, getQuery } from '#imports';

export default defineEventHandler(async event => {
  try {
    const { url } = getQuery(event);
    console.log('get image size', url);
    const { imageMeta } = await import('image-meta').then(
      module => module.default || module
    );

    const data = await fetch(url).then(async res =>
      Buffer.from(await res.arrayBuffer())
    );
    const meta = await imageMeta(data);
    console.log(meta);
    return meta;
  } catch (error) {
    console.error(error);
    return { error: error.message, width: 0, height: 0, type: null };
  }
});
