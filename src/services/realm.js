import Realm from 'realm';

import PostSchema from '../schemas/PostSchema';

export default function getRealm() {
  return Realm.open({
    schema: [PostSchema],
  });
}
