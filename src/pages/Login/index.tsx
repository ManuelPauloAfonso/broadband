import { Container } from "./style";
import Logo from '../../assets/logo.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationForm = yup.object().shape({

        email: yup.string().email("email invalido").required("email é obrigatorio"),
        password: yup.string().required('palavra passe é obrigatorio').max(20, "palavra passe precisa de ter 20 caracteres"),  
    })  

export default function Login(){
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(validationForm)
        })

        function onSubmit(data: Record<string, any>) {
                console.log(data)
        }
    return (
         <Container>
                 <div className="container-login">
                    <img src={Logo} alt="" />
                    <h1>Faça seu Login <br /> na Plataforma</h1>
                    <p className="pa">Entre para poder navegar na plataforma e realizar actividades</p>
                 </div>
                 <div className="container-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="email" {...register('email')} />
                            { errors.email && <p className="errors"><>{errors.email?.message}</></p>}
                            <input type="text" placeholder="senha" {...register('password')} />
                            { errors.password && <p className="errors"><>{errors.password?.message}</></p>}
                            <button>Entrar</button>

                            <p className="p" >Não tem uma conta? <a href="">Registar-se</a> </p>
                    </form>
                 </div>
         </Container>
    )
}