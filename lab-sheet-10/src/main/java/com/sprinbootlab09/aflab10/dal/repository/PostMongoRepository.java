package com.sprinbootlab09.aflab10.dal.repository;

import com.sprinbootlab09.aflab10.dal.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostMongoRepository extends MongoRepository<PostModel, String> {}
