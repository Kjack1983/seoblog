export const GenderSelect = ({gender, selectChange}) => {
    return (
        <select id="dropdown" value={gender} onChange={selectChange}>
            <option value="N/A">N/A</option>
            <option value="Male">Male</option>
            <option value="Female">Felame</option>
        </select>
    );
}