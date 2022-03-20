package com.example.appengine.datastore;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.cloud.datastore.Batch;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.IncompleteKey;
import com.google.cloud.datastore.Key;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.ReadOption;
import com.google.cloud.datastore.Transaction;
import com.google.datastore.v1.TransactionOptions;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

public class DatastoreAdapter implements Datastore {
    private final DatastoreService datastoreService;
    private final String projectId;

    public DatastoreAdapter(DatastoreService datastoreService, String projectId) {
        this.datastoreService = datastoreService;
        this.projectId = projectId;
    }

    @Override
    public Transaction newTransaction(TransactionOptions transactionOptions) {
        return null;
    }

    @Override
    public Transaction newTransaction() {
        return null;
    }

    @Override
    public <T> T runInTransaction(TransactionCallable<T> transactionCallable) {
        return null;
    }

    @Override
    public <T> T runInTransaction(TransactionCallable<T> transactionCallable, TransactionOptions transactionOptions) {
        return null;
    }

    @Override
    public Batch newBatch() {
        return null;
    }

    @Override
    public Key allocateId(IncompleteKey incompleteKey) {
        return null;
    }

    @Override
    public List<Key> allocateId(IncompleteKey... incompleteKeys) {
        return null;
    }

    @Override
    public List<Key> reserveIds(Key... keys) {
        return null;
    }

    @Override
    public Entity add(FullEntity<?> fullEntity) {
        return null;
    }

    @Override
    public List<Entity> add(FullEntity<?>... fullEntities) {
        return null;
    }

    @Override
    public void update(Entity... entities) {

    }

    @Override
    public Entity put(FullEntity<?> fullEntity) {
        return null;
    }

    @Override
    public List<Entity> put(FullEntity<?>... fullEntities) {
        List<com.google.appengine.api.datastore.Entity> gaeEntityList = Arrays.stream(fullEntities)
                .map((FullEntity<?> fullEntity) -> {
                    Key incompleteKey = (Key) fullEntity.getKey();
                    com.google.appengine.api.datastore.Key key = convertGCToGAEKey(incompleteKey);
                    com.google.appengine.api.datastore.Entity entity = new com.google.appengine.api.datastore.Entity(key);
                    copyGCToGAEEntityProperties(fullEntity, entity);

                    return entity;
                })
                .collect(Collectors.toList());

        datastoreService.put(gaeEntityList);

        return Arrays.stream(fullEntities)
                .map(fullEntity -> {
                    Key key = (Key) fullEntity.getKey();
                    return Entity.newBuilder(key, fullEntity).build();
                })
                .collect(Collectors.toList());
    }

    @Override
    public void delete(Key... keys) {

    }

    @Override
    public KeyFactory newKeyFactory() {
        return new KeyFactory(projectId, "default");
    }

    @Override
    public Entity get(Key key, ReadOption... readOptions) {
        return null;
    }

    @Override
    public Iterator<Entity> get(Iterable<Key> iterable, ReadOption... readOptions) {
        return null;
    }

    @Override
    public List<Entity> fetch(Iterable<Key> iterable, ReadOption... readOptions) {
        return null;
    }

    @Override
    public <T> QueryResults<T> run(Query<T> query, ReadOption... readOptions) {
        return null;
    }

    @Override
    public DatastoreOptions getOptions() {
        return null;
    }

    @Override
    public Entity get(Key key) {
        try {
            com.google.appengine.api.datastore.Entity entity = datastoreService.get(convertGCToGAEKey(key));
            Entity.Builder builder = Entity.newBuilder(key);
            copyGAEToGCEntityProperties(builder, entity);

            return builder.build();
        } catch (EntityNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Iterator<Entity> get(Key... keys) {
        return null;
    }

    @Override
    public List<Entity> fetch(Key... keys) {
        List<com.google.appengine.api.datastore.Key> keyList = Arrays.stream(keys)
                .map(this::convertGCToGAEKey)
                .collect(Collectors.toList());

        Collection<com.google.appengine.api.datastore.Entity> values = datastoreService.get(keyList)
                .values();

        return values
                .stream()
                .map(entity -> {
                    Key key = Key.newBuilder(projectId, entity.getKind(), entity.getKey().getName())
                            .build();

                    Entity.Builder builder = Entity.newBuilder(key);
                    copyGAEToGCEntityProperties(builder, entity);

                    return builder.build();
                }).collect(Collectors.toList());
    }

    @Override
    public <T> QueryResults<T> run(Query<T> query) {
        return null;
    }

    private com.google.appengine.api.datastore.Key convertGCToGAEKey(Key key) {
        return com.google.appengine.api.datastore.KeyFactory.createKey(key.getKind(), key.getName());
    }

    private Key convertGAEToGCKey(Key k) {
        return Key.newBuilder(projectId, k.getKind(), k.getName()).build();
    }

    private void copyGAEToGCEntityProperties(Entity.Builder GCEntityBuilder, com.google.appengine.api.datastore.Entity GAEEntity) {
        GAEEntity.getProperties().forEach((k, v) -> {
            if (v instanceof String) {
                GCEntityBuilder.set(k, (String) v);
            } else if (v instanceof Long) {
                GCEntityBuilder.set(k, (Long) v);
            } else if (v instanceof Double) {
                GCEntityBuilder.set(k, (Double) v);
            } else if (v instanceof Boolean) {
                GCEntityBuilder.set(k, (Boolean) v);
            } else {
                throw new UnsupportedOperationException("Not implemented yet");
            }
        });
    }

    private void copyGCToGAEEntityProperties(FullEntity<?> fullEntity, com.google.appengine.api.datastore.Entity entity) {
        fullEntity.getProperties().forEach((k, v) -> entity.setProperty(k, v.get()));
    }
}
