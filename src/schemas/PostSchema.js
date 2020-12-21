export default class PostSchema {
  static schema = {
    name: 'Post',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      title: 'string',
      body: 'string',
      liked: 'string',
    },
  };
}
