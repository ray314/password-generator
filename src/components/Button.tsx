interface Props {
  buttonName: string
}

const Button = ({ buttonName }: Props) => {
  return (
    <button style={{ backgroundColor: 'green'}} className='btn btn-primary'>
      {buttonName}
    </button>
  )
}

export default Button
