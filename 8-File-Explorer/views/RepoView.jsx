import React from 'react';

const RepoView = (props) => {
    let { result } = props;
    const renderFileIcon = ext => {
        if (ext === 'pdf') return ">>>PDF"
        if (ext === 'txt') return ">>>TEXT"
        if (ext === 'jpg') return ">>>JPEG"
    }
    const renderDirectory = () => {
        return result.map((item) => {
            return (
                <div className="list-group-item">
                    <a href={item}>{item.substring(0, item.lastIndexOf('.'))}</a>
                    {renderFileIcon(item.substring(item.lastIndexOf('.') + 1))}
                </div>
            )
        })
    }
    return (
        <div>
            {renderDirectory()}
        </div>
    );
};

export default RepoView;