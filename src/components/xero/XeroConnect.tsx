function XeroConnect() {
  return (
    <div>
      <h1>Xero connect</h1>
      <button className="bg-green-400 py-1.5 px-3 rounded text-white">
        <a
          target="_blank"
          href={process.env.NEXT_PUBLIC_API_URL + "/xero/connect"}
        >
          Connect with Xero
        </a>
      </button>
    </div>
  );
}

export default XeroConnect;
