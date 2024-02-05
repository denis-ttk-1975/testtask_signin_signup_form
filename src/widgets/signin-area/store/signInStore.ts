import create from 'zustand';

interface IFormState {
    formState: {
        emailValue: string,
        emailIsValid: boolean,
        passwordValue: string,
        passwordIsValid: boolean,
    }
    setEmail: (newValue: string) => void
    setPassword: (newValue: string) => void
    checkEmail: (value: boolean) => void
    checkPassword: (value: boolean) => void
    }

const useSignInStore = create<IFormState>((set) => ({
    formState: {
        emailValue: '',
        emailIsValid: true,
        passwordValue: '',
        passwordIsValid: true,
    },
    setEmail: (newValue) => set((state) => ({
        formState: {
            ...state.formState,
            emailValue: newValue
        }
    })),
    setPassword: (newValue) => set((state) => ({
        formState: {
            ...state.formState,
            passwordValue: newValue
        }
    })),
    checkEmail: (value) => set((state) => ({
        formState: {
            ...state.formState,
            emailIsValid: value
        }
    })),
    checkPassword: (value) => set((state) => ({
        formState: {
            ...state.formState,
            passwordIsValid: value
        }
    })),
}))

export default useSignInStore;