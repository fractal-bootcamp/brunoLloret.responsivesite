const MiniCardAbout = ({ title }: { title: string },
    { description }: { description: string },
    { hyperlink }: { hyperlink: string }

) => {
    return <div>

        <h3 className="font-semibold"> {title}</h3>
        <div className='p-10'>
            <p> {description}</p>
            <a href="/pressNancy/" className="italic">{hyperlink}</a>
        </div>
    </div>
}

export default MiniCardAbout
