import Input from "components/Atom/Input";

export default function Search({ className, onChange }) {
  return (
    <form className={`relative ${className}`}>
      <Input
        type="text"
        onChange={onChange}
        className="w-[300px] sm:w-full"
        placeholder="search user ..."
      />
    </form>
  );
}
