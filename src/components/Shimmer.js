const Shimmer = () => {
return (
        <div className="flex flex-wrap gap-10 mx-[100] my-15">
        {Array.from({ length: 20 }, (_, i) => (
            <div
            key={i}
            className="rounded-lg w-[320] h-[320]"
            style={{ backgroundColor: "#f2f2f2" }}
            />
        ))}
    </div>
    )
};

export default Shimmer;
