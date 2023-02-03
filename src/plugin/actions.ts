import { GlobalStateContext } from 'piral-core';
import { UserInfo } from './types';

export function setUser(ctx: GlobalStateContext, user: UserInfo | undefined) {
  ctx.dispatch((state) => {
    ctx.emit('change-user', {
      current: user,
      previous: state.user,
    });
    return {
      ...state,
      user,
    };
  });
}