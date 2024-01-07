'use client'
import Masonry from "react-responsive-masonry";

export default function StoriesGrid() {
    const items = Array.from({ length: 20 });

    return (
        <div className="w-[calc(100%-24px)] mx-auto">
            <Masonry columnsCount={2} gutter="12px">
                {items.map((_, index) =>
                (
                    <div className="relative" key={index}>
                        <img className="rounded-2xl" src={`https://source.unsplash.com/random?${index}`} />
                        <div className="absolute bottom-[12px] left-[12px] h-[46px]">
                            <div className="flex justify-start items-center">
                                <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src={`https://source.unsplash.com/random?${index+20}`} />
                                <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
                            </div>
                            <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
                        </div>
                    </div>
                ))
                }
            </Masonry>
            {/*
            <div className="mx-3 w-[calc(100%-24px)] my-5 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[10px]" style={{ gridAutoRows: '188px' }}>
                <div className="relative bg-gray-500 rounded-[14px] max-w-[188px] row-span-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img className="object-cover h-full w-full rounded-[14px]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <div className="absolute inset-0 rounded-[14px] shadow-inner"></div>
                    <div className="absolute bottom-[12px] left-[12px] h-[46px]">
                        <div className="flex justify-start items-center">
                            <img className="object-cover h-8 w-8 rounded-full shadow-2xl" src="https://i.ibb.co/XtmjDMB/image-2-4.png" />
                            <span className="ml-[6px] text-xs text-white">Ava Reynolds</span>
                        </div>
                        <p className="text-[10px] opacity-75 text-white">@avareynolds • 2 hours ago</p>
                    </div>
                </div>
            </div>
            */}
        </div>
    );
}
