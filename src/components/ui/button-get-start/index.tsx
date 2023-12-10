interface Props {
    text?: string
    classButton?: string
}
const GetStart: React.FC<Props> = ({ text, classButton }) => {
    return (
        <button className={`${classButton} rounded-lg px-5 py-3`}>
            {text || 'Bắt đầu dùng thử'}
        </button>
    )
}
export default GetStart
