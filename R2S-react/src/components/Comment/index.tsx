import './style.css'
export const CommentForm = () => {
    return (
        <div className="container card content-item" id="comments">
            <div className="card-body d-flex">
                <div className="row">
                    <div className="">
                        <h3>4 Comments</h3>

                        {/* COMMENT 1 - START */}
                        <div className='media d-flex form-input-comment'>
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="input-comment">
                                <input className='input-comment__form' placeholder='Post a comment...' />
                                <div className='d-flex' style={{ justifyContent: "space-between", marginTop: "30px" }}>
                                    <div className='d-flex input-comment__icons'>
                                        <i className="fas fa-camera"></i>
                                        <i className="far fa-kiss-wink-heart"></i>
                                        <i className="fas fa-gift"></i>
                                        <i className="fas fa-sticky-note"></i>
                                    </div>
                                    <div>
                                        <i className="fas fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media d-flex">
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="media-body">
                                <h6 className="media-heading">John Doe</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</p>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                                        <li><i className="fa fa-calendar"></i>27/02/2014</li>
                                        <li><i className="fa fa-thumbs-up"></i>13</li>
                                    </ul>
                                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                                        <li><a href=''>Edit</a></li>
                                        <li className=""><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media d-flex">
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="media-body">
                                <h6 className="media-heading">John Doe</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</p>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                                        <li><i className="fa fa-calendar"></i>27/02/2014</li>
                                        <li><i className="fa fa-thumbs-up"></i>13</li>
                                    </ul>
                                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                                        <li><a href=''>Edit</a></li>
                                        <li className=""><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media d-flex">
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="media-body">
                                <h6 className="media-heading">John Doe</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</p>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                                        <li><i className="fa fa-calendar"></i>27/02/2014</li>
                                        <li><i className="fa fa-thumbs-up"></i>13</li>
                                    </ul>
                                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                                        <li><a href=''>Edit</a></li>
                                        <li className=""><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media d-flex">
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="media-body">
                                <h6 className="media-heading">John Doe</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.</p>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                                        <li><i className="fa fa-calendar"></i>27/02/2014</li>
                                        <li><i className="fa fa-thumbs-up"></i>13</li>
                                    </ul>
                                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                                        <li><a href=''>Edit</a></li>
                                        <li className=""><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media d-flex">
                            <a className="pull-left" href="#"><img className="rounded-circle"
                                width="50"
                                src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></a>
                            <div className="media-body">
                                <h6 className="media-heading">John Doe</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                    <ul className="list-unstyled list-inline media-detail pull-lef d-flex">
                                        <li><i className="fa fa-calendar"></i>27/02/2014</li>
                                        <li><i className="fa fa-thumbs-up"></i>13</li>
                                    </ul>
                                    <ul className="list-unstyled list-inline media-detail pull-right d-flex">
                                        <li><a href=''>Edit</a></li>
                                        <li className=""><a href="">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}