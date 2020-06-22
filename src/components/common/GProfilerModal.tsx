import _ from 'lodash';
import { BackendAPI } from './API';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form,
    Checkbox,
    Table,
    Input,
    Select,
} from 'semantic-ui-react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

interface IGProfilerPopupState {
    showModal: boolean;
    topNumFeatures: number[];
    selectedOrganism: string;
    gProfilerToken: string;
}

interface IGProfilerPopupProps {
    numFeatures: number;
    clusteringID: number;
    clusterID: number;
    cookies: Cookies;
}

class GProfilerPopup extends Component<
    IGProfilerPopupProps & RouteComponentProps,
    IGProfilerPopupState
> {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired,
    };

    constructor(props: IGProfilerPopupProps & RouteComponentProps) {
        super(props);
        this.state = {
            showModal: false,
            topNumFeatures: [],
            selectedOrganism: null,
            gProfilerToken: null,
        };
    }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { showModal } = this.state;

        let cardStyle = {
            display: 'block',
            width: '100vw',
            transitionDuration: '0.3s',
        };

        const handleOpenModal = () => {
            this.openModal();
        };

        const handleCloseModal = () => {
            this.closeModal();
        };

        const topNumFeaturesArray = [
            100,
            200,
            300,
            400,
            500,
        ].filter((topNumFeaturesValue) =>
            topNumFeaturesValue < this.props.numFeatures ? true : false
        );

        const handleClickCreateGProfilerLink = () => {
            let query = {
                loomFilePath: BackendAPI.getActiveLoom(),
            };
        };

        const organisms = [
            { key: 1, text: 'Human', value: 'hsapiens' },
            { key: 2, text: 'Mouse', value: 'mmusculus' },
            { key: 3, text: 'Drosophila melanogaster', value: 'dmelanogaster' },
        ];

        const handleSelectOrganism = (e, { value }) => {
            this.setState({ selectedOrganism: value });
        };

        const handleChangeToken = (e, { value }) => {
            this.setState({ gProfilerToken: value });
        };

        return (
            <>
                <Modal
                    as={Form}
                    trigger={
                        <Button
                            color='orange'
                            onClick={handleOpenModal}
                            style={{
                                marginTop: '10px',
                                marginBottom: '10px',
                                width: '100%',
                            }}>
                            Run g:Profiler Gene List Enrichment
                        </Button>
                    }
                    onClose={handleCloseModal}
                    // closeOnDocumentClick={'ready' == this.state.status}
                    open={showModal}
                    // onSubmit={e => {this.sendData(e)}}
                >
                    <Modal.Header>
                        Run g:Profiler Gene List Enrichment
                    </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <div>Run As Multi-query</div>
                            <div>
                                Totral number of features:
                                {this.props.numFeatures}
                            </div>
                            <Form>
                                <Table compact celled definition>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell />
                                            <Table.HeaderCell>
                                                Gene List with Number of Top
                                                Features to Use
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {topNumFeaturesArray.map(
                                            (
                                                topNumFeaturesValue,
                                                topNumFeaturesIndex
                                            ) => {
                                                const handleToggleTopNumFeatures = () => {
                                                    if (
                                                        this.state.topNumFeatures.includes(
                                                            topNumFeaturesValue
                                                        )
                                                    ) {
                                                        this.setState({
                                                            topNumFeatures: this.state.topNumFeatures.filter(
                                                                (value) =>
                                                                    value !=
                                                                    topNumFeaturesValue
                                                            ),
                                                        });
                                                    } else {
                                                        this.setState({
                                                            topNumFeatures: [
                                                                ...this.state
                                                                    .topNumFeatures,
                                                                topNumFeaturesValue,
                                                            ],
                                                        });
                                                    }
                                                };

                                                const isSelected = this.state.topNumFeatures.includes(
                                                    topNumFeaturesValue
                                                );

                                                return (
                                                    <Table.Row>
                                                        <Table.Cell collapsing>
                                                            <Checkbox
                                                                onChange={
                                                                    handleToggleTopNumFeatures
                                                                }
                                                            />
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {isSelected ? (
                                                                <b>
                                                                    {`Top ${topNumFeaturesValue}`}
                                                                </b>
                                                            ) : (
                                                                <span
                                                                    style={{
                                                                        textDecorationLine:
                                                                            'line-through',
                                                                        textDecorationStyle:
                                                                            'solid',
                                                                    }}>{`Top ${topNumFeaturesValue}`}</span>
                                                            )}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                );
                                            }
                                        )}
                                    </Table.Body>
                                </Table>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Select}
                                        label='Organism'
                                        options={organisms}
                                        placeholder='Choose an organism'
                                        onChange={handleSelectOrganism}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='g:Profiler Token (Optional)'
                                        placeholder='Token'
                                        value={this.state.gProfilerToken}
                                        onChange={handleChangeToken}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        {
                            <Button
                                type='button'
                                value='create-gprofiler-link'
                                onClick={handleClickCreateGProfilerLink}
                                // disabled={this.getButtonDisabledStatus()}
                                secondary>
                                {'Create Link'}
                            </Button>
                        }
                        {
                            <Button
                                type='button'
                                value='goto-gprofiler'
                                // onClick={(e) => this.sendData(e)}
                                // disabled={this.getButtonDisabledStatus()}
                                primary>
                                {'Go to g:Profiler'}
                            </Button>
                        }
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}

export default withCookies(withRouter(GProfilerPopup));