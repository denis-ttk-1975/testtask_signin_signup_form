import create from 'zustand';

interface IFormState {
    formState: {
        nameValue: string,
        nameIsValid: boolean,
        emailValue: string,
        emailIsValid: boolean,
        passwordValue: string,
        passwordIsValid: boolean,
        confirmPasswordValue: string,
        confirmPasswordIsValid: boolean,
    }
    setName: (newValue: string) => void
    setEmail: (newValue: string) => void
    setPassword: (newValue: string) => void
    setConfirmPassword: (newValue: string) => void
    checkName: (value: boolean) => void
    checkEmail: (value: boolean) => void
    checkPassword: (value: boolean) => void
    checkConfirmPassword: (value: boolean) => void
    }

const useSignUpStore = create<IFormState>((set) => ({
    formState: {
        nameValue: '',
        nameIsValid: true,
        emailValue: '',
        emailIsValid: true,
        passwordValue: '',
        passwordIsValid: true,
        confirmPasswordValue: '',
        confirmPasswordIsValid: true,
    },
    setName: (newValue) => set((state) => ({
        formState: {
            ...state.formState,
            nameValue: newValue
        }
    })),
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
    setConfirmPassword: (newValue) => set((state) => ({
        formState: {
            ...state.formState,
            confirmPasswordValue: newValue
        }
    })),
    checkName: (value) => set((state) => ({
        formState: {
            ...state.formState,
            nameIsValid: value
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
    checkConfirmPassword: (value) => set((state) => ({
        formState: {
            ...state.formState,
            confirmPasswordIsValid: value
        }
    })),
}))

export default useSignUpStore;