import React, {PropsWithChildren, PureComponent} from 'react';
import {Meta} from "./common/Meta";

interface Props extends PropsWithChildren<any>  {
    meta: {
        url: string,
        title: string,
        description: string,
        image: string,
        siteName?: string,
        openGraphType: string,
    }
}

class AppLayout extends PureComponent<Props>{
    constructor(props: Props){
        super(props);
    }

    render(){
        const {children, meta} = this.props;
        return(
            <>
                <Meta {...meta}/>
                <main className={'h-screen'}>
                    {children}
                </main>
            </>
        );
    }
}


export default AppLayout;
