import styles from '../src/css/Home.module.css';
import ExampleComponent from "../src/javascript/components/ExampleComponent";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import AppLayout from "../src/javascript/components/AppLayout";
import {LocaleDropdown} from "../src/javascript/components/common/LocaleDropdown";
import withAuth from '../src/javascript/HOC/withAuth';
import React from "react";
import {NextAuthSession} from "../src/javascript/types/general";

interface Props {
  session: NextAuthSession
}

class Home extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {session} = this.props;
    return (
      <div className={styles.container}>
        <AppLayout meta={{
          url: '/',
          title: 'index page',
          description: 'the index page of the template app',
          image: '',
          openGraphType: ''
        }}>
          {session.status === 'loading' ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <ExampleComponent/>
            </>
          )}

        </AppLayout>
      </div>
    );
  }

}

export async function getStaticProps({locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'countries'])),
    },
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default withAuth(Home);
