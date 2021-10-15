export default async function Lookup() {
  console.log('[ルックアップ型]');

  type APIResponse = {
    user: {
      userId: string;
      friendList: {
        count: number;
        friends: {
          firstName: string;
          lastName: string;
        }[];
      };
    };
  };

  // キーを指定して、型をルックアップ
  type FriendList = APIResponse['user']['friendList'];
  type Friend = FriendList['friends'][number];

  function getApiResponse(): Promise<APIResponse> {
    const res = {
      user: {
        userId: 'usr-001',
        friendList: {
          count: 1,
          friends: [{ firstName: 'Amy', lastName: 'Stray' }],
        },
      },
    };
    return Promise.resolve(res);
  }

  function renderFriendList(friendList: FriendList) {
    console.log('count', friendList.count);
    for (const friend of friendList.friends) {
      console.log(friend);
    }
  }

  const res = await getApiResponse();
  renderFriendList(res.user.friendList);
}
