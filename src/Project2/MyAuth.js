export const restoreUser = (setUserState) => {
    const token = localStorage.getItem('token');
    if (token) {
      // تعيين حالة المستخدم بناء على التوكن المخزن في localStorage
      setUserState({ isAuthenticated: true, token: token });
    }
  };