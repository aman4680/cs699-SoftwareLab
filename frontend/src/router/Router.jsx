import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import useUserStatus from "../hooks/useUserStatus";
import AuthRouteLayout from "../pages/AuthRouteLayout/AuthRouteLayout";
import DefaultLayout from "../pages/DefaultLayout";
import Error from "../pages/Error/Error";
import GoogleTokenSetter from "../pages/GoogleTokenSetter/GoogleTokenSetter";
import Loading from "../pages/Loading/Loading";
import NotFound from "../pages/NotFound/NotFound";
// import DrivesList from "../pages/Drives/DrivesList";

// Lazily importing pages
const Home = lazy(() => import("../pages/Home/Home"));
const PostEdit = lazy(() => import("../pages/PostEdit/PostEdit"));
const PostForm = lazy(() => import("../pages/PostForm/PostForm"));
const InterviewPostForm= lazy(() => import("../pages/PostForm/InterviewPostForm"));
const PostList = lazy(() => import("../pages/PostList/PostList"));
const PostPage = lazy(() => import("../pages/PostPage/PostPage"));
const ProfileEdit = lazy(() => import("../pages/ProfileEdit/ProfileEdit"));
const ProfilePage = lazy(() => import("../pages/Profile/ProfilePage"));
const DrivesList = lazy(() => import("../pages/Drives/DrivesList"));
const Quiz = lazy(() => import("../pages/Quiz/Quiz"));
const QuizList = lazy(() => import("../pages/QuizList/QuizList"));
const UserRegister = lazy(() => import("../pages/UserRegister/UserRegister"));
const UserSearch = lazy(() => import("../pages/UserSearch/UserSearch"));
const Login = lazy(() => import("../pages/Login/Login"));
const ResetPassword = lazy(() =>
  import("../pages/ResetPassword/ResetPassword")
);

function Router() {
  const { pathname } = useLocation();
  const { isLoading, isError } = useUserStatus();

  // Function to scroll to top when url changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/driveslist" element={<DrivesList />} />
          {/* <Route path="/postedit" element={<PostEdit />} /> */}
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/token/google/:token" element={<GoogleTokenSetter />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/user/search" element={<UserSearch />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route element={<AuthRouteLayout />}>
            {/* <Route path="/post" element={<PostForm />} /> */}
            <Route path="/post" element={<InterviewPostForm />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/post/edit/:id" element={<PostEdit />} />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
