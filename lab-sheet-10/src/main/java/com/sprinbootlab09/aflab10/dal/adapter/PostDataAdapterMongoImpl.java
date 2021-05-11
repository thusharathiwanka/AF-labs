package com.sprinbootlab09.aflab10.dal.adapter;

import com.sprinbootlab09.aflab10.dal.model.PostModel;
import com.sprinbootlab09.aflab10.dal.repository.PostMongoRepository;
import com.sprinbootlab09.aflab10.domain.Post;
import com.sprinbootlab09.aflab10.domain.PostDataAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class PostDataAdapterMongoImpl implements PostDataAdapter {
    private PostMongoRepository repository;
    private MongoTemplate template;

    @Autowired
    public PostDataAdapterMongoImpl(PostMongoRepository repository, MongoTemplate template) {
        this.repository = repository;
        this.template = template;
    }

    @Override
    public Post save(Post post) {
        PostModel postModel = new PostModel();
        postModel.setName(post.getName());
        postModel.setDescription(post.getDescription());
        postModel.setPostedDate(post.getPostedDate());
        postModel = repository.save(postModel);
        post.setId(postModel.getId());

        return post;
    }

    @Override
    public List<Post> getPosts() {
        List<PostModel> postModels = repository.findAll();
        List<Post> posts = new ArrayList<>();

        for(PostModel postModel: postModels) {
            Post post = new Post();
            post.setId(postModel.getId());
            post.setName(postModel.getName());
            post.setDescription(postModel.getDescription());
            post.setPostedDate(postModel.getPostedDate());
            posts.add(post);
        }
        return posts;
    }

    @Override
    public Post updatePost(Post post) {
        PostModel postModel = template.findAndModify(Query.query(Criteria.where("id").is(post.getId())),
                new Update().set("name", post.getName()).set("description", post.getDescription()), PostModel.class);
        post.setPostedDate(postModel.getPostedDate());

        return post;
    }

    @Override
    public Post deletePost(String id) {
        Optional<PostModel> postModel = repository.findById(id);
        Post post = new Post();

        if(postModel.isPresent()) {
            System.out.println(postModel.get().getName());
            post.setId(postModel.get().getId());
            post.setName(postModel.get().getName());
            post.setDescription(postModel.get().getDescription());
            post.setPostedDate(postModel.get().getPostedDate());
            repository.deleteById(id);
        }

        return post;
    }
}
