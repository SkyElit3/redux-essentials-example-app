import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import {selectPostById} from "./postsSlice";

export const SinglePostPage = ({match}) => {
    const {postId} = match.params

    const post = useSelector(state => selectPostById(state,postId))
    // the component will re-render any time the value returned from useSelector changes to a new reference

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <div>
                    <PostAuthor userId={post.user} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <p className="post-content">{post.content}</p>
                <p><ReactionButtons post={post}/></p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}