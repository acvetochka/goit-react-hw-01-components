import Profile from 'components/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/friends/FriendList';
import TransactionHistory from 'components/transactions/TransactionHistory';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import css from 'components/App.module.css';

export const App = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
        </div>
        <div>
          <FriendList friends={friends} />
        </div>
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
};
