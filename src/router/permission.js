import nprogress from "@/libs/nprogress";

const permission = router => {
  router.beforeEach((to, from, next) => {
    nprogress.start();
    next();
  });

  router.afterEach(() => {
    nprogress.done();
  });
};

export default permission;
