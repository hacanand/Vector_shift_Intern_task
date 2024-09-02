// submit.js

export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className="font-bold p-3 mt-2 border-2 rounded-md hover:bg-slate-700 bg-slate-800 text-white" type="submit">Submit</button>
        </div>
    );
}
