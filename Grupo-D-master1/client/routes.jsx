import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import Login from '../imports/ui/Login.jsx';
import Home from '../imports/ui/Home.jsx';
import Registro from '../imports/ui/Registro.jsx';
import { layoutCuenta } from './layouts/layoutCuenta.jsx';
import { EmptyLayout } from './layouts/EmptyLayout.jsx';
import RecuperarContraseña from '../imports/ui/RecuperarContraseña.jsx';
import ResetPassword from '../imports/ui/ResetPassword.jsx';
import Email from '../imports/ui/Email.jsx';
FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
      content:(<Home/>)
    });
  }
});

FlowRouter.route('/Login',{
  action(){
    mount(MainLayout,{
      content:(<Login/>)
    });
  }
});

FlowRouter.route('/RecuperarContraseña',{
  action(){
    mount(MainLayout,{
      content:(<RecuperarContraseña/>)
    });
  }
});
FlowRouter.route('/ResetPassword',{
  action(){
    mount(MainLayout,{
      content:(<ResetPassword/>)
    });
  }
});

FlowRouter.route('/Registro',{
  action(){
    mount(MainLayout,{
      content:(<Registro/>)
    });
  }
});
FlowRouter.route('/:id',{
  action(){
    mount(layoutCuenta,{
      content:(<Home/>)
    });
  }
});
FlowRouter.route('/ResetPassword/:token',{
  action(){
    mount(MainLayout,{
      content:(<ResetPassword/>)
    });
  }
});
FlowRouter.route('/Email',{
  action(){
    mount(MainLayout,{
      content:(<Email/>)
    });
  }
});
