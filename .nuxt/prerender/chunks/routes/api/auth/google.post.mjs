import { defineEventHandler, readBody, createError } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import { OAuth2Client } from 'file:///Users/yunhao/Project/website/node_modules/.pnpm/google-auth-library@9.14.1/node_modules/google-auth-library/build/src/index.js';

const google_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const oauth2Client = new OAuth2Client();
  oauth2Client.setCredentials({ access_token: body.accessToken });
  const userInfo = await oauth2Client.request({
    url: "https://www.googleapis.com/oauth2/v3/userinfo"
  }).then((response) => response.data).catch(() => null);
  oauth2Client.revokeCredentials();
  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid token"
    });
  }
  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified
  };
});

export { google_post as default };
//# sourceMappingURL=google.post.mjs.map
