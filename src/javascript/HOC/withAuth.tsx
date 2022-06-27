import React, {ComponentType, PropsWithChildren} from "react";
import { useSession } from "next-auth/react";

// eslint-disable-next-line react/display-name
const withAuth = (Component: ComponentType) => (props: PropsWithChildren<any>) => {
  const session = useSession();

  // if the component has a render property, we are good
  if (Component.prototype.render) {
    return <Component session={session} {...props} />;
  }

  // if the passed component is a function component, there is no need for this wrapper
  throw new Error(
    [
      "You passed a function component, `WithAuth` is not needed.",
      "You can `useSession` directly in your component.",
    ].join("\n")
  );
};

export default withAuth;
