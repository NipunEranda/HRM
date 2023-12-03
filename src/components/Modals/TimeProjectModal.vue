<template>
    <div class="modal fade" id="timeProjectModal" tabindex="-1" aria-labelledby="timeProjectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-95" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="timeProjectModalLabel">{{ modal.modalTitle }}</h5>
                    <button class="btn btn-sm ps-2 pe-2" data-bs-dismiss="modal">
                        <font-awesome-icon icon="fa-close" class="ms-1 me-1" />
                    </button>
                </div>
                <div class="staffModalBody" id="modal-body"> ... </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary me-0"
                        @click="timeProjectModalOperation(modal.mode, timeProject)" data-bs-dismiss="modal">
                        {{ modal.buttonProcessName }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import utils from "@/utils";
export default {
    setup: () => { },
    data() {
        return {};
    },
    props: {
        modal: Object,
        timeProject: Object,
        timeProjectModalOperation: { type: Function },
    },
    methods: {}
};
</script>
