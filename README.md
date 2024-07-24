## Welcome to PetrArchive CMS 👋

This is the backend of PetrArchive.

---

In order to run this with the current database you will need to make a [Railway](https://railway.app) account.

When your account is created contact me to add you to the project.

Next you will need to install railways cli tool and npm on your machine.

Then run:

```bash
railway login
```
or
```bash
railway login --browserless
```
if you are using a headless mode.

Run:
```bash
railway link
```
and select the Petr CMS project.

Finally run:
```bash
railway run npm run develop
```
to run the CMS locally

## 📝 Notes

- After your app is deployed, visit the `/admin` endpoint to create your admin user.
- Railway's filesystem is ephemeral which is why any changes to the filesystem are not persisted between deploys. This is why, this example uses Cloudinary for storage.
