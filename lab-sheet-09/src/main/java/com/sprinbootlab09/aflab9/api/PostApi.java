package com.sprinbootlab09.aflab9.api;

import com.sprinbootlab09.aflab9.domain.Post;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class PostApi {
    private Map<String, Post> posts;

    public PostApi() {
        this.posts = new HashMap<>();
    }

    public List<?> getPosts() {
        return List.of(posts);
    }

    public Post addPost(Post post) {
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(), post);
        return post;
    }

    public Post deletePost(String id) {
        return posts.remove(id);
    }

    public Post updatePost(String id, Post post) {
        return posts.replace(id, post);
    }
}
