package com.sprinbootlab09.aflab10.api;

import com.sprinbootlab09.aflab10.domain.Post;
import com.sprinbootlab09.aflab10.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PostApi {
    private final Map<String, Post> posts;
    private final PostDataAdapter postDataAdapter;

    @Autowired
    public PostApi(PostDataAdapter postDataAdapter) {
        this.postDataAdapter = postDataAdapter;
        this.posts = new HashMap<>();
    }

    public List<?> getPosts() {
        return postDataAdapter.getPosts();
    }

    public Post addPost(Post post) {
        post.setPostedDate(LocalDateTime.now());
        post = postDataAdapter.save(post);
        return post;
    }

    public Post deletePost(String id) {
        return postDataAdapter.deletePost(id);
    }

    public Post updatePost(Post post) {
        return postDataAdapter.updatePost(post);
    }
}
