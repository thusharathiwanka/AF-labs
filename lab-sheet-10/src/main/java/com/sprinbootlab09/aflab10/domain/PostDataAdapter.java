package com.sprinbootlab09.aflab10.domain;

import java.util.List;

public interface PostDataAdapter {
    public Post save(Post post);
    public List<Post> getPosts();
    public Post updatePost(Post post);
    public Post deletePost(String id);
}
