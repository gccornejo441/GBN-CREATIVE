import React, {PropsWithChildren, PureComponent} from 'react';

class Grid4Col extends PureComponent<PropsWithChildren<any>> {
  constructor(props :PropsWithChildren<any>) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <div
        className="container mx-auto grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {children}
      </div>
    );
  }
}


export default Grid4Col;
