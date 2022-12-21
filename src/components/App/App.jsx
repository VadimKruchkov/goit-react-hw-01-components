import { Profile } from './../Profile/Profile';
import { Section } from './../Section/Section';
import { FriendList } from './../FriendList/FriendList';
import { TransactionHistory } from './../TransactionHistory/TransactionHistory';

import friends from './../json/friends.json';
import user from './../json/user.json';
import data from './../json/data.json';
import transactions from './../json/transactions.json';
import { Container } from './App.styled';

import { updateArray } from './../Utils/filterData';

const newData = updateArray(data);

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats" stats={newData}></Section>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />; ;
    </Container>
  );
};
