import { useInfiniteQuery } from "@tanstack/react-query";
import { ReplyList } from "../../types/comment.types";
import NestedCommentCard from "../NestedCommentCard/NestedCommentCard";
import styles from "./CommentReply.module.css";
import { getCommentRepliesPaginated } from "../../services/comments.services";
import React from "react";

function CommentReply({ postId, commentId }) {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["replies", postId, commentId],
      getNextPageParam: (prevData) => prevData.page.nextPage,
      queryFn: ({ pageParam = 1 }) =>
        getCommentRepliesPaginated(postId, commentId, pageParam, 2),
    });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
    scrollFooterElement = <p>Loading...</p>;
  } else if (hasNextPage) {
    scrollFooterElement = (
      <button
        type="button"
        className={`default-button ${styles.nextPageButton}`}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        Load More
      </button>
    );
  }

  const isEmpty = data?.pages[0].data.length === 0;
  return (
    <div className={styles.innerCmt}>
      {isEmpty ? <p className={styles.noReply}>No Reply yet</p> : null}
      {!isEmpty ? (
        <>
          <ul>
            {data?.pages
              .flatMap((page) => page.data)
              .map((commentReply) => (
                <NestedCommentCard
                  postId={postId}
                  commentId={commentId}
                  commentReply={commentReply}
                  key={commentReply._id}
                />
              ))}
          </ul>

          <div className={styles.scrollFooter}>{scrollFooterElement}</div>
        </>
      ) : null}
    </div>
  );
}

export default CommentReply;
