import { PostCard } from '../PostCard'

export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                cover={post.cover}
            // post={post} = se fosse enviar o post inteiro de uma vez
            />
        ))}
    </div>
);