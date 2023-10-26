const passport = require("passport");

module.exports = (app) => {

  //send users to google OAuth 2.0 workflow. Requests access to google profile and email
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //Callback from google OAuth
  app.get("/auth/google/callback", passport.authenticate("google"));
};
