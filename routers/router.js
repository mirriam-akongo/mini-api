const router = require("express-promise-router")();
const {
  Welcome,
  GetList,
  PostHome,
  GetDetails,
  PostDetails,
} = require("../controllers/controller");

router.route("/").get(Welcome);
router.route("/list").get(GetList);

router.route("/").post(PostHome);
router.route("/:person").get(GetDetails);
router.route("/:person").post(PostDetails);

module.exports = router;
