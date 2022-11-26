import React from "react";

const GoogleMap = (prop) => (
        <div className="map">
            <br />
            <h2 className="map-h2">Наше розташування</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.5795015531326!2d24.69146711564271!3d48.94245047929589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c0555b52538b%3A0xc4f2d9702855bce0!2z0YPQuy4g0KTQtdC00YzQutC-0LLQuNGH0LAsIDcwLCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1669466077958!5m2!1sru!2sua"
                width="700"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    )

export default GoogleMap;