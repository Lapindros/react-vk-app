import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.getPhotos(year)
    };

    renderButtons = () => {
        const years = [2019, 2018, 2017, 2016];
        return years.map((item, index) => {
            return (
                <button className='btn' key={index} onClick={this.onBtnClick}>{item}</button>
            )
        })
    };

    renderTemplate = () => {
        const {photos, isFetching, error} = this.props;

        if (error) {
            return <div>Во время загрузки фото произошла ошибка</div>
        }
        if (photos.length === 0) {
            return <div>К сожалению фотографий нет.</div>
        }

        if (isFetching) {
            return <div>Загрузка...</div>

        } else {
            return photos.map((entry) => (
                <div key={entry.id}>
                    <img src={entry.sizes[0].url} alt=""/>
                    <p>{entry.likes.count}❤</p>
                </div>
            ))
        }
    };

    render() {
        const {year, photos} = this.props;
        return (
            <div className='fotos'>
                <div className='fotos__btn-list'>
                    {this.renderButtons()}
                </div>
                <div className='fotos__year'>{year} год [{photos.length}]</div>
                {this.renderTemplate()}
            </div>
        )
    }
}

Page.protoType = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
};

export default Page;