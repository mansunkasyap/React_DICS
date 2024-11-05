import React from 'react'

const submitAnswer = (answer) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let isError = answer.toLowerCase() !== 'programming language';
            if(isError){
                reject(new Error('Wow!! Wrong answer. Try again!!'))
            }
            else{
                resolve()
            }
        }, 2000)
    })
}
const QuizForm = () => {
    const [answer, setAnswer] = React.useState('');
    const [error, setError] = React.useState(null);
    const [status, setStatus] = React.useState('typing')
    if(status === 'success'){
        return <h1>Right ! </h1>
    }
    const handleSubmit = async (e) => { 
        e.preventDefault();
        setStatus('submitting')
        try{
            await submitAnswer(answer)
            setStatus('success')
        }catch(err){
            setStatus('typing')
            setError(err)
        }
    }

    const handleTextChange = (e) =>{
            setAnswer(e.target.value)
    }
    return (
        <div>
            <h2>Quiz</h2>
            <p>
                What is JavaScript ?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={answer}
                    onChange={handleTextChange}
                />
                <br />

                <button disabled={answer.length === 0 ||
          status === 'submitting'
        }>submit answer</button>
                {
                    error != null && <p>
                        {
                            error.message 
                        }
                    </p>
                }
            </form>
        </div>
    );
}

export default QuizForm