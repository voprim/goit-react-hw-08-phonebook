import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Navigation} from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Suspense fallback={null}>
          
          <Outlet />
        </Suspense>
      </div>
      

    </div>
  );
};


/*

*/