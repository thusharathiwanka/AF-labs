package com.sprinbootlab09.aflab9.controller;

import com.sprinbootlab09.aflab9.api.PostApi;
import com.sprinbootlab09.aflab9.domain.Post;
import com.sprinbootlab09.aflab9.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {
    private final PostApi api;

    @Autowired
    public PostEndpoint(PostApi api) {
        this.api = api;
    }

    @GetMapping
    public List<?> getPosts() {
        return api.getPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto) {
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return api.addPost(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Post deletePost(@PathVariable String id) {
        return api.deletePost(id);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, PostDto postDto) {
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return api.updatePost(id, post);
    }
}
